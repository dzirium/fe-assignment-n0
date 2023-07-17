//assets
import image from '../assets/image.png'
//styles
import {styles} from '../style'

export const Contact = () => {
    return (
      <div className={`h-full ${styles.mainPage}`}>
          
          {/* TITLE */}
          <h1 className={styles.title}>Contact Us</h1>
          
          {/* CONTENT */}
          <section className='flex items-center justify-around w-full'>
            <img className='w-[40%]' src={image} alt="" />

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
  