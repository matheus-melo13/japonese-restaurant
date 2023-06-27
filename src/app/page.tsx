import React from 'react';
import Image from 'next/image';
import Menu from 'public/menu.svg';
import Banner from 'public/banner.svg';
import Prato1 from 'public/frango.svg';
import Prato2 from 'public/apimentado.svg';
import Prato3 from 'public/tradicional.svg';
import Profile1 from 'public/profile1.svg';
import Profile2 from 'public/profile2.svg';
import Estrelas from 'public/estrelas.svg';
import Mapa from 'public/mapa.svg';
import Location from 'public/location.svg';
import Buscar from 'public/buscar.svg';

export default function Home() {
  return (
    <body className='bg-support-00'>
      <header className='flex justify-between p-6'>
        <p className='text-darkk-10 font-bold text-lg'>Food<span className='text-support-06'>JP</span></p>
        <Image src={Menu} alt='Menu' width={24} height={24}/>
      </header>

      <main>
        <section className='flex flex-col p-6 gap-6'>
          <h2 className='font-bold text-2xl'>Comida Oriental</h2>
          <p className='text-base'>
          A culinária Japonesa é bastante equilibrada, sendo muito rica em peixes (ômega 3), vegetais, massas e ingredientes frescos.
          </p>
          <button className='text-base text-support-00 bg-support-06 font-semibold my-3 rounded-md py-[10.5px]'>Cardápio</button>
        </section>

        <section className='flex flex-col p-6 text-center gap-6'>
          <Image className='mb-[32px]' src={Banner} alt='Prato de comida oriental' width={312} height={350}/>
          <h2 className='font-semibold text-2xl'>Feita de Forma Tradicional</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          </p>
          <a className='text-base underline text-support-06 font-medium' href="/">Ler mais sobre o modo de preparo</a>
        </section>
        
        <section>
          <h3 className='pb-20 pt-8 font-semibold text-2xl text-center'>Mais populares</h3>

          <div className='flex flex-col p-6 gap-28'>
            <div className='bg-darkk-30 text-center relative flex flex-col min-h-[400px] justify-end rounded-3xl gap-4'>
              <Image className='self-center absolute top-[-50px]' src={Prato1} alt='Prato de comida oriental' width={209} height={209}/>
              <h3 className='font-medium text-2xl'>Ramen de Frango</h3>
              <p className='text-base'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <p className='text-[32px] pb-12'>R$ 30</p>
            </div>

            <div className='bg-darkk-30 text-center relative flex flex-col min-h-[400px] justify-end rounded-3xl gap-4'>
              <Image className='self-center absolute top-[-50px]' src={Prato2} alt='Prato de comida oriental' width={209} height={209}/>
              <h3 className='font-medium text-2xl'>Ramen Apimentado</h3>
              <p className='text-base'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <p className='text-[32px] pb-12'>R$ 30</p>
            </div>

            <div className='bg-darkk-30 text-center relative flex flex-col min-h-[400px] justify-end rounded-3xl gap-4'>
              <Image className='self-center absolute top-[-50px]' src={Prato3} alt='Prato de comida oriental' width={209} height={209}/>
              <h3 className='font-medium text-2xl'>Ramen Tradicional</h3>
              <p className='text-base'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <p className='text-[32px] pb-12'>R$ 30</p>
            </div>
            
          </div>
        </section>

        <section className='p-6'>
          <h3 className='text-2xl font-semibold text-center pb-10'>Comentários</h3>

          <div className='flex flex-col gap-7'>
            <div className='bg-darkk-30 flex flex-col text-center items-center gap-4 p-6 rounded-lg'>
              <Image className='' src={Profile1} alt='Foto de perfil' width={60} height={60}/>
              <h4 className='font-medium text-lg'>Daniele Almeida</h4>
              <p>
                Ótimo serviço! Encantada com a qualidade dos pratos.
              </p>
              <Image src={Estrelas} alt='5 estrelas vermelhos' width={122} height={19}/>
            </div>

            <div className='bg-darkk-30 flex flex-col text-center items-center gap-4 p-6 rounded-lg'>
              <Image className='' src={Profile2} alt='Foto de perfil' width={60} height={60}/>
              <h4 className='font-medium text-lg'>Ricardo França</h4>
              <p>
                Não é apenas a comida excelente, o serviço torna a experiência especial.
              </p>
              <Image src={Estrelas} alt='5 estrelas vermelhos' width={122} height={19}/>
            </div>      
          </div>
        </section>

        <section>
          <h3>Localização</h3>
          <Image className='' src={Mapa} alt='Mapa do Rio de Janeiro' width={312} height={242}/>

          <div>
            <Image className='' src={Location} alt='Localização' width={20} height={20}/>
            <input type='text' placeholder='Localização para entrega'/>
            <button>
              <a className='hidden' href='/'>Buscar</a>
              <Image className='' src={Buscar} alt='Pesquisar' width={20} height={20}/>
            </button>
          </div>
        </section>

      </main>
    </body>
  )
}
