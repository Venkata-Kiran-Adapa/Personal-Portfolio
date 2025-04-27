import './certification.css'
import TypingEffect from '../typing Effect/typing';

function Certifications(){
    return(
        <div className="bg-black mt-4 w-100 certfied fw-lighter">
           <h3 className='text-center'>Certified In</h3>
            <ul>
                <li> <TypingEffect text='A WS Cloud Practitioner Essentials by Amazon Web Services' /> </li>
                <li> <TypingEffect text='T CS ION Career Edge- Young Professional by TCS iON.' /> </li>
                <li> <TypingEffect text='D ata Structures and Algorithms Using Java by NPTEL.' /> </li>
                <li> <TypingEffect text='O bject-Oriented Programming in Java by UC San Diego.' /> </li>
                <li> <TypingEffect text='I ntroduction to SQL by Simplilearn.' /> </li>
            </ul>
        </div>
    )
}

export default  Certifications;