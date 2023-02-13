import arc from '@architect/functions'

export async function handler(req) {
  console.log(' ')
  console.log('--------------------------------------------------------------------------------')

  const { ARC_ENV } = process.env
  console.log('ARC_ENV', ARC_ENV)

  let services = await arc.services()
  console.log('services', services)

  let db = await arc.tables()
  let core = await db.core

  console.log('db', db.name('core'))

  // create Chuck and Jana
  let put = await core.put({
    pk: '1',
    sk: '2',
    rand: Math.random(),
  })
  console.log('put', put)

  let get = await core.get({
    pk: '1',
    sk: '2',
  })

  return {
    statusCode: 200,
    headers: {
      'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0',
      'content-type': 'text/html; charset=utf8',
    },
    body: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Architect</title>
  <style>
     * { margin: 0; padding: 0; box-sizing: border-box; } body { font-family: -apple-system, BlinkMacSystemFont, sans-serif; } .max-width-320 { max-width: 20rem; } .margin-left-8 { margin-left: 0.5rem; } .margin-bottom-16 { margin-bottom: 1rem; } .margin-bottom-8 { margin-bottom: 0.5rem; } .padding-32 { padding: 2rem; } .color-grey { color: #333; } .color-black-link:hover { color: black; } 
  </style>
</head>
<body class="padding-32">
  ${get.rand}
</body>
</html>
`,
  }
}
