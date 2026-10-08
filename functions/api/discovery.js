
export async function onRequestPost({ request, env }) {
  const json = (data, status = 200) =>
    new Response(JSON.stringify(data), {
      status,
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "no-store",
      },
    });

  try {
    const origin = request.headers.get("Origin");

    if (
      origin &&
      ![
        "https://12stone-2026.pages.dev",
        "https://12stoneconsulting.com",
        "https://www.12stoneconsulting.com",
      ].includes(origin)
    ) {
      return json({ error: "Origin not allowed" }, 403);
    }

    if (!env.GHL_API_TOKEN || !env.GHL_LOCATION_ID) {
      return json({ error: "Server configuration missing" }, 500);
    }

    const body = await request.json();
    const { name, business, email, phone } = body;

    if (
      typeof name !== "string" ||
      typeof business !== "string" ||
      typeof email !== "string" ||
      typeof phone !== "string" ||
      !name.trim() ||
      !business.trim() ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
      !phone.trim()
    ) {
      return json({ error: "Please complete all fields." }, 400);
    }

    const response = await fetch(
      "https://services.leadconnectorhq.com/contacts/upsert",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${env.GHL_API_TOKEN}`,
          Version: "2021-07-28",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          locationId: env.GHL_LOCATION_ID,
          name: name.trim(),
          companyName: business.trim(),
          email: email.trim(),
          phone: phone.trim(),
          source: "12 STONE Website Discovery",
          tags: ["12stone-website-lead"],
        }),
      }
    );

    if (!response.ok) {
      console.error("GHL contact upsert failed:", response.status);
      return json(
        { error: "Unable to submit right now. Please try again." },
        502
      );
    }

    return json({ success: true });
  } catch (error) {
    console.error("Discovery form error:", error);
    return json(
      { error: "Something went wrong. Please try again." },
      500
    );
  }
}
