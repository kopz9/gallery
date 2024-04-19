import Link from "next/link";
import { db } from "~/server/db";

const mockUrls = [
  "https://utfs.io/f/7eac6c32-38d7-471a-8974-5dfb172595d1-6oyrny.jpg",
  "https://utfs.io/f/89807985-b836-4ecb-8b44-0b963ea38ae5-ejso3p.png",
  "https://utfs.io/f/732da824-7e9a-4b4b-8a5e-a00fead5a119-uog7fb.jpg",
  "https://utfs.io/f/035be513-43db-4cff-a723-b01ef1172ff0-7yzse.jpg",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default async function HomePage() {

  const posts = await db.query.posts.findMany();
  console.log(posts)


  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => (
          <div key={post.id}>{post.name} </div>
        ))}
        {mockImages.map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} />
          </div>
        ))}
      </div>
    </main>
  );
}
