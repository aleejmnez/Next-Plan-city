import Link from "next/link"
import { Event } from "@/types/event"


interface ProductCardProps {
  product: Event
}

// Componente "tarjeta": recibe UN producto por props y solo se encarga
// de mostrarlo. La lista completa la arma quien lo use (products/page.tsx).
export default function ProductCard({ product }: ProductCardProps) {
  return (
    <li className="flex flex-col justify-between rounded-lg border border-black/10 p-4 shadow-sm transition hover:shadow-md dark:border-white/10">
      <div>
        <span className="text-xs uppercase tracking-wide text-blue-500">
          {product.categoryId}
        </span>
        <h2 className="mt-1 text-lg font-semibold">{product.name}</h2>
        <p className="mt-1 text-sm text-zinc-500">{product.description}</p>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <span className="font-semibold">${product.price.toFixed(2)}</span>
        <Link
          href={`/products/${product.name}`}
          className="rounded bg-blue-500 px-3 py-1.5 text-sm text-white hover:bg-blue-600"
        >
          Ver detalle
        </Link>
      </div>
    </li>
  )
}
