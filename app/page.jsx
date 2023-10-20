import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h2>Dashboard</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam unde
        deserunt, rem voluptates ipsum laborum ad veritatis, nulla est atque
        dolorem, dicta nemo. Obcaecati atque illo tempore maxime, est quidem!
      </p>

      <div className="flex justify-center my-8">
        <Link href="tickets">
          <button className="btn-primary">View Tickets</button>
        </Link>
      </div>

      <h2>Company Updates</h2>

      <div className="card">
        <h3>New member of the web dev team...</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
          facilis aliquid quam odio aspernatur perferendis voluptatem, ex
          cupiditate quasi impedit accusamus odit est, ab beatae molestias
          asperiores? Iste, vel unde?
        </p>
      </div>
      <div className="card">
        <h3>New website live!</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
          facilis aliquid quam odio aspernatur perferendis voluptatem, ex
          cupiditate quasi impedit accusamus odit est, ab beatae molestias
          asperiores? Iste, vel unde?
        </p>
      </div>
    </main>
  );
}
