const MAX_LENGTHS = {
  name: 100,
  email: 254,
  message: 5000,
} as const;

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  message?: unknown;
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  const recipient = process.env.CONTACT_EMAIL ?? "malikmaulana253@gmail.com";
  const sender = process.env.RESEND_FROM_EMAIL ?? "Portfolio <onboarding@resend.dev>";

  if (!apiKey) {
    return Response.json(
      { error: "Contact service is not configured." },
      { status: 503 },
    );
  }

  let payload: ContactPayload;
  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return Response.json({ error: "Invalid request body." }, { status: 400 });
  }

  const name = typeof payload.name === "string" ? payload.name.trim() : "";
  const email = typeof payload.email === "string" ? payload.email.trim() : "";
  const message =
    typeof payload.message === "string" ? payload.message.trim() : "";

  if (
    !name ||
    !email ||
    !message ||
    name.length > MAX_LENGTHS.name ||
    email.length > MAX_LENGTHS.email ||
    message.length > MAX_LENGTHS.message ||
    !isValidEmail(email)
  ) {
    return Response.json(
      { error: "Please provide a valid name, email, and message." },
      { status: 400 },
    );
  }

  const resendResponse = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: sender,
      to: [recipient],
      reply_to: email,
      subject: `Portfolio inquiry from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    }),
  });

  if (!resendResponse.ok) {
    console.error("Resend contact request failed.", {
      status: resendResponse.status,
    });
    return Response.json(
      { error: "Unable to send your message right now." },
      { status: 502 },
    );
  }

  return Response.json({ success: true });
}
