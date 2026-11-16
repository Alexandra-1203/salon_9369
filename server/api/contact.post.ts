export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const { name, phone, email, message } = body || {}

  if (!name || !phone) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Имя и телефон обязательны',
    })
  }

  const config = useRuntimeConfig(event)
  const VK_TOKEN = config.vkCommunityToken
  const VK_USER_ID = config.vkUserId

  if (!VK_TOKEN || !VK_USER_ID) {
    throw createError({
      statusCode: 500,
      statusMessage: 'VK не настроен (TOKEN / USER_ID)',
    })
  }

  const text = `🆕 Новая заявка с сайта!

👤 Имя: ${name}
📞 Телефон: ${phone}
✉️ Email: ${email || '—'}
💬 Сообщение: ${message || '—'}`

  const randomId = Math.floor(Math.random() * 1_000_000_000)

  const params = new URLSearchParams({
    access_token: VK_TOKEN,
    user_id: String(VK_USER_ID),
    message: text,
    random_id: String(randomId),
    v: '5.199',
  })

  try {
    const response: any = await $fetch(
      `https://api.vk.com/method/messages.send?${params.toString()}`,
      { method: 'POST' }
    )

    if (response?.error) {
      console.error('VK API error:', response.error)
      throw createError({
        statusCode: 502,
        statusMessage: `VK error: ${response.error.error_msg || 'unknown'}`,
      })
    }
  } catch (e: any) {
    if (e?.statusCode) throw e
    console.error('VK send fail:', e?.message || e)
    throw createError({
      statusCode: 502,
      statusMessage: 'Не удалось отправить заявку',
    })
  }

  return { ok: true }
})