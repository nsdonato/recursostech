import { noeSocialNetworks } from 'db/vamoacodear-socials'

import { Contributors } from '@/components/contributors/contributors'
import { Figure } from '@/components/figure/figure'
import { Header } from '@/components/header/header'
import { WebLink } from '@/components/web-link/web-link'

export default async function Home() {
  return (
    <>
      <Header
        href='Inicio'
        title='Inicio'
        description={['En Internet siempre veo las mismas preguntas:']}
      />
      <ul className='list-disc list-inside my-6'>
        <li>¿Tenes algún recurso de iconos?</li>
        <li>¿Donde puedo deployar mi web?</li>
        <li>¿Cómo configuro [inserte aquí extensión, herramienta, etc]?</li>
      </ul>
      <p>
        💡 Crees que debería haber un recurso y no esta? Hace un PR y agregalo!
      </p>
      <p className='mb-4'>
        😨 ¿No te animas?, hace el pedido mediante este{' '}
        <WebLink
          className='underline'
          eventName='Click on New Issue - Link recurso'
          href='https://github.com/nsdonato/recursostech/issues/new/choose'
          target='_blank'>
          Issue
        </WebLink>
        , opción <em>Agregar nuevo recurso</em> y lo agregamos!
      </p>
      <p>
        📹 ¿Te gustaría que alguna herramienta tenga video, para saber como
        instalarla/configurarla?
      </p>
      <p className='mb-4'>
        🚀 Hace el pedido mediante un{' '}
        <WebLink
          className='underline'
          eventName='Click on New Issue - Link video'
          href='https://github.com/nsdonato/recursostech/issues/new/choose'
          target='_blank'>
          Issue
        </WebLink>
        , opción <em>Agregar nuevo video para recurso</em>e intentamos sumarlo!
      </p>
      <p className='mb-4'>
        Espero te guste la idea y si crees que se puede agregar algo más, no
        dudes en comentarlo! ☺️
      </p>
      Noe.-
      <div className='flex justify-evenly max-w-sm gap-2 mt-4 items-center mb-6 md:max-w-56'>
        {noeSocialNetworks.map(({ type, url, cover }) => (
          <WebLink
            key={type}
            href={url}
            eventName={`Click on vamoacodear - ${type}`}>
            <Figure cover={cover} placeholder={type} />
          </WebLink>
        ))}
      </div>
      <Contributors isIndex />
    </>
  )
}
