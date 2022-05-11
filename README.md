# 4 Ways to use dynamic routes in Next.js

This repo references four different ways to use dynamic routes in Next.js to make sure the route data gets to the page prior to trying use it.

## Usage: Option 1

```javascript
export default function Home() {
  const router = useRouter();
  const { name } = router.query;

  useEffect(() => {
    if (!router.isReady) return;
    //rest of code
  }, [router.query.name, router.isReady]);

  return <></>;
}
```
