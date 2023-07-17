//assets
import image from '../assets/image.png'
//styles
import {styles} from '../style'

export const About = () => {
    return (
      <div className={`p-4 lg:p-0 h-full ${styles.mainPage}`}>
          
          {/* TITLE */}
          <h1 className={styles.title}>About Us</h1>
          
          {/* CONTENT */}
          <section className='space-y-4 lg:space-y-0 flex flex-col lg:flex-row items-center lg:justify-around'>
            <p className={`${styles.text} lg:w-[40%]`}>Welcome to Scent Haven, a captivating perfume store where fragrance becomes an enchanting experience. Our carefully curated collection features luxurious perfumes, each chosen to evoke emotions and leave an unforgettable impression. Step into our elegant store, where knowledgeable staff will guide you to discover the fragrance that resonates with your unique style. Explore opulent classics, contemporary masterpieces, and niche brands, as well as scented body care and home fragrances. Scent Haven is a sanctuary for fragrance enthusiasts, where every bottle holds a world of possibilities. At Scent Haven, fragrance is an enchanting experience. Our curated collection features luxurious perfumes chosen to evoke emotions and leave an unforgettable impression. Step into our elegant store, where knowledgeable staff will guide you to discover your unique scent. Explore opulent classics, contemporary masterpieces, and niche brands, as well as scented body care and home fragrances. Scent Haven is a sanctuary for fragrance enthusiasts, where every bottle holds a world of possibilities.</p>

            <img className='lg:w-[40%]' src={image} alt="" />
          </section>
      </div>
    )
  }
  