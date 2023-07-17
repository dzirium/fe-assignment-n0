//assets
import image from '../assets/image.png'
//styles
import {styles} from '../style'

export const Contact = () => {
    return (
      <div className={`p-4 lg:p-0 h-full ${styles.mainPage}`}>
          
          {/* TITLE */}
          <h1 className={styles.title}>Contact Us</h1>
          
          {/* CONTENT */}
          <section className='space-y-4 lg:space-y-0 flex flex-col items-center w-full md:grid md:grid-cols-2 md:gap-4 lg:flex lg:flex-row lg:justify-around'>
            <img className='order-last place-self-center md:col-span-2 lg:w-[40%] lg:order-first' src={image} alt="" />

            {/* ADDRESS */}
            <span className='text-center'>
              <p className={styles.subTitle}>Reach out at:</p>
              <p className={styles.largeText}>42 Joe Mama st. - Algiers <br/> +213 550 88 48 15 <br/> scenthaven@outlook.dz</p>
            </span>
            
            {/* INPUTS */}
            <span className='space-y-3'>
              <p className={styles.subTitle}>Or send us a message:</p>
              <p className={styles.largeText}>Name :</p>
              <input type="text" className={styles.input} />
              <p className={styles.largeText}>Message : </p>
              <textarea name="message" className={`${styles.input} pb-10`}></textarea>
            </span>

           
          </section>
      </div>
    )
  }
  