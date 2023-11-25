This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

### デプロイ

github actions + S3 + CloudFront + Next.js + microCMS を使用。
git push main で github actions から s3 に sync

github に以下の環境変数を追加

```
ACCESS_KEY_ID: cloudformation、s3が利用できるIAMのユーザーのアクセスキー
SECRET_ACCESS_KEY: cloudformation、s3が利用できるIAMのユーザーのシークレットアクセスキー
AWS_CF_ID: awsのcloud frontのID
AWS_S3_BUCKET: S3バケット名
NEXT_PUBLIC_SERVICE_DOMAIN: microCMSのドメイン
NEXT_PUBLIC_API_KEY: microCMSのAPIキー
```

cloud front 関数で`/`で終わったら `/index.html` に飛ばすように修正

```
function handler(event) {
    const request = event.request
    const uri = request.uri
    if (uri.endsWith("/")) {
        request.uri += "index.html"
    } else if (!uri.includes(".")) {
        request.uri += "/index.html"
    }
    return request
}
```

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
