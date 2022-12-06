import { BsGlobe, BsInstagram } from "react-icons/bs"
import photoHizkia from '../img/hizkia_reppi.jpg';
import photoArauna from '../img/arauna_pabara.jpg';
import photoMauludu from '../img/mauludu_basirun.jpg';

const About = () => {
  return (
    <section className='h-full bg-hero bg-no-repeat bg-cover bg-center py-28'>
      <div className='container mx-auto text-center'>
        {/* title */}
        <h1 className='text-[30px] md:text-[50px] leading-[1.1] font-bold mb-4'>
          ABOUT US
        </h1>
        <div className='flex justify-center items-center text-xs md:text-lg font-semibold'>
          <div className='w-10 h-[2px] bg-red-500 mr-3'></div>
            Group 1 <span className='text-red-500 mx-1.5'>Web Programming</span> PTIK
          <div className='w-10 h-[2px] bg-red-500 ml-3'></div>
        </div>
        <div className='flex flex-wrap justify-center items-center gap-10 mt-5'>
          <div className='h-[345px] w-72 rounded-xl px-5 py-3.5 shadow-md flex flex-col justify-around items-center'>
            <div className='w-4/5'>
              <img src={photoHizkia} alt='Hizkia Reppi' className='w-full' />
            </div>
            <h5 className='text-base md:text-xl font-semibold'>Hizkia Jefren Reppi</h5>
            <h6 className='text-sm md:text-lg font-medium'>21208008</h6>
            <div className='flex items-center justify-center gap-2 text-sm md:text-lg'>
              <a href='https://www.instagram.com/hizkiajefren_/' target='_blank'>
                <BsInstagram />
              </a>
              <a href='https://www.hizkiareppi.netlify.app' target='_blank'>
                <BsGlobe />
              </a>
            </div>
          </div>
          <div className='h-[345px] w-72 rounded-xl px-5 py-3.5 shadow-md flex flex-col justify-around items-center'>
            <div className='w-4/5'>
              <img src={photoArauna} alt='Arauna Pabara' className='w-full' />
            </div>
            <h5 className='text-base md:text-xl font-semibold'>Arauna Rangan Pabara</h5>
            <h6 className='text-sm md:text-lg font-medium'>21208001</h6>
            <div className='flex items-center justify-center gap-2 text-sm md:text-lg'>
              <a href='https://www.instagram.com/arrrrrrrrraaaaaaaaa/' target='_blank'>
                <BsInstagram />
              </a>
              <a href='https://www.araunapabara.netlify.app' target='_blank'>
                <BsGlobe />
              </a>
            </div>
          </div>
          <div className='h-[345px] w-72 rounded-xl px-5 py-3.5 shadow-md flex flex-col justify-around items-center'>
            <div className='w-4/5'>
              <img src={photoMauludu} alt='Mauludu Basirun' className='w-full' />
            </div>
            <h5 className='text-base md:text-xl font-semibold'>Mauludu Basirun</h5>
            <h6 className='text-sm md:text-lg font-medium'>21208020</h6>
            <div className='flex items-center justify-center gap-2 text-sm md:text-lg'>
              <a href='https://www.instagram.com/mauludu_basirun/' target='_blank'>
                <BsInstagram />
              </a>
              <a href='https://www.mauludubasirun.netlify.app' target='_blank'>
                <BsGlobe />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About