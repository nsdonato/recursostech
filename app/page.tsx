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
        description={['🌎 En Internet siempre veo las mismas preguntas:']}
      />
      <ul className='list-disc list-inside my-6'>
        <li>¿Hay streamers de programación?</li>
        <li>¿Donde puedo deployar mi web?</li>
        <li>¿Cómo configuro [extensión, herramienta, etc]?</li>
      </ul>
      <p className='mb-8'>
        💡 La idea de Recursos Tech es que encuentres todos los recursos en un
        solo lugar y no pierdas tiempo buscando todo lo que necesitas para
        realizar tu proyecto.
      </p>
      <p className='mb-8'>
        La web es Open Source, así que si queres participar, tenes diferentes
        maneras:
      </p>
      <p className='mb-1'>
        🚀 Hace un PR en el{' '}
        <WebLink
          className='underline'
          eventName='Click on New Issue - Link recurso'
          href='https://github.com/nsdonato/recursostech'
          target='_blank'>
          repositorio
        </WebLink>
      </p>
      <p className='mb-1'>
        😨 ¿No te animas a hacer el PR?. Podes hacer el pedido mediante un{' '}
        <WebLink
          className='underline'
          eventName='Click on New Issue - Link recurso'
          href='https://github.com/nsdonato/recursostech/issues/new/choose'
          target='_blank'>
          Issue
        </WebLink>
        , opción 👉🏻 <em>Agregar nuevo recurso</em>
      </p>
      <p className='mb-1'>
        📹 ¿Te gustaría que alguna herramienta tenga video, para saber como
        funciona, instalarla o configurarla? Hace el pedido mediante un Issue,
        opción 👉🏻{' '}
        <WebLink
          className='underline'
          eventName='Click on New Issue - Link video'
          href='https://github.com/nsdonato/recursostech/issues/new/choose'
          target='_blank'>
          Agregar nuevo video
        </WebLink>
      </p>
      <p className='mb-10'>
        🔜 Proximamente podrás hacer pedidos mediante un formulario
      </p>
      Noe.-
      <div className='flex items-center gap-2 mt-4'>
        {noeSocialNetworks.map(({ type, url, cover }) => (
          <WebLink
            key={type}
            href={url}
            eventName={`Click on vamoacodear - ${type}`}>
            <Figure className='' cover={cover} placeholder={type} />
          </WebLink>
        ))}
      </div>
      <Contributors isIndex />
    </>
  )
}
