//redux
import { useSelector } from 'react-redux';
import {selectProductById} from '../app/features/products/productsSlice'
//react-router-dom
import { useParams } from "react-router-dom"
//styles
import {styles} from '../style'

export const ProductDetails = () => {

  const {id} = useParams()
  const product = useSelector(state => selectProductById(state, Number.parseInt(id)));  
 
  return (
    <div className='grid grid-cols-2 gap-4 justify-items-center'>
      {/* DETAILS */}
      <div className={`${styles.text} flex flex-col items-start justify-around w-[80%]`}>
        <h1 className={styles.title}>{product.title}</h1>
        <p className={styles.text}>{product.description}</p>
        <span className='flex items-center'><p className={styles.largeText}>Brand:</p>{product.brand}</span>
        <span className='flex items-center'><p className={styles.largeText}>Category:</p>{product.category}</span>
      </div>
      <div className={`${styles.text} flex flex-col items-start justify-around w-[80%]`}>
        <span className='flex items-center'><p className={styles.largeText}>Rating:</p>{product.rating}</span>
        <span className='flex items-center'><p className={styles.largeText}>Stock:</p>{product.stock}</span>
        <span className='flex items-center'><p className={styles.largeText}>Discount:</p>{product.discountPercentage} %</span>
        <span className='flex items-center'><p className={styles.largeText}>Price:</p>{product.price} $</span>

      </div>
      {/* IMAGES */}
      <div className='col-span-2 grid grid-cols-3 gap-6 w-[80%]'>
        {product.images.map((image)=>(
          <img key={image.index} className='h-[150px] w-[250px] rounded-lg ' src={image} alt="" />
        ))}
      </div>
    </div>
  )
}
