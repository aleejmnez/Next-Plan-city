import { products } from "@/data/products"
import ProductCard from "@/components/products/ProductCard"
import ProductsAside from "@/components/products/ProductsAside"
import { getEvents } from "@/services/events.service"
import type { Event } from "@/types/event"

// Página /products: layout de dos columnas.
// - En mobile: aside arriba, tarjetas abajo (flex-col).
// - Desde md: fila, con el aside a la DERECHA (flex-row-reverse lo logra
//   sin cambiar el orden en el que escribimos el JSX, así el aside sigue
//   leyéndose primero en el HTML por accesibilidad).
export  default async function ProductsPage() {

  const events: Event[] | [] = await getEvents();

  return (
    <div className="mx-auto flex w-full max-w-5xl flex-1 flex-col gap-6 p-4 md:flex-row-reverse">
      <ProductsAside />

      <section className="flex-1">
        <h1 className="mb-4 text-xl font-bold">Nuestros productos</h1>

        {/* grid responsivo: 1 columna en mobile, 2 en sm, 3 en lg */}
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {events.map((event) => (
            <ProductCard
              key={event.name}
              product={event}
            />
          ))}
        </ul>
      </section>
    </div>
  )
}
