import React from 'react'

export default function About(props) {
  return (
    <>
    <div className='container my-3'>
      <h1>About TextUtils</h1>
    <div className="accordion accordion-flush" id="accordionFlushExample">
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button style={props.mode=='dark' ? {backgroundColor: 'rgb(118,118,118)',color: 'white'} : {backgroundColor: 'white',color: 'black'}} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
      <strong>Our Mission: Empowering Your Text Editing Experience</strong>
      </button>
    </h2>
    <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div style={props.mode=='dark' ? {backgroundColor: 'rgb(118,118,118)',color: 'white'} : {backgroundColor: 'white',color: 'black'}} className="accordion-body">At TextUtils, we believe that efficient and convenient text editing is a crucial aspect of every individual's daily life. Whether you're a student, professional, or casual user, dealing with text is an integral part of your routine. That's why we have developed a comprehensive text editing tool that caters to all your needs.</div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button style={props.mode=='dark' ? {backgroundColor: 'rgb(118,118,118)',color: 'white'} : {backgroundColor: 'white',color: 'black'}} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
      <strong>What is TextUtils?</strong>
      </button>
    </h2>
    <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div style={props.mode=='dark' ? {backgroundColor: 'rgb(118,118,118)',color: 'white'} : {backgroundColor: 'white',color: 'black'}} className="accordion-body">TextUtils is an all-in-one online text editing application that offers a range of powerful and user-friendly features. We strive to make your text editing tasks simpler, faster, and more efficient. Whether you need to format text, count words, remove duplicate lines, or convert text case, TextUtils has got you covered.</div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button style={props.mode=='dark' ? {backgroundColor: 'rgb(118,118,118)',color: 'white'} : {backgroundColor: 'white',color: 'black'}} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
        <strong>Why Choose TextUtils?</strong>
      </button>
    </h2>
    <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div style={props.mode=='dark' ? {backgroundColor: 'rgb(118,118,118)',color: 'white'} : {backgroundColor: 'white',color: 'black'}} className="accordion-body"><b>1. User-Friendly Interface:</b> We have designed TextUtils with a clean and intuitive interface, ensuring a smooth user experience for everyone, regardless of their technical expertise.

      <b>2. Versatile Text Manipulation:</b> TextUtils provides a wide array of tools to manipulate and transform your text effortlessly. You can easily capitalize or lowercase text, add line breaks, remove leading/trailing spaces, and much more.

<b>3. Efficient Word Count:</b> Accurately determine the number of words, characters, paragraphs, and even sentences in your text with a simple click. This feature proves invaluable for academic writing, content creation, or any scenario where precise word count matters.

<b>4. Text Case Conversion:</b> Convert your text to uppercase, lowercase, sentence case, or title case, saving you time and effort when formatting your content.

<b>5. Remove Duplicate Lines:</b> TextUtils enables you to eliminate duplicate lines from your text, ensuring clean and unique content for any purpose.

<b>6. Dark Mode:</b> For users who prefer a darker interface, TextUtils offers a stylish dark mode that reduces eye strain and enhances the visual experience.</div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button style={props.mode=='dark' ? {backgroundColor: 'rgb(118,118,118)',color: 'white'} : {backgroundColor: 'white',color: 'black'}} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
      <strong>Experience the Power of TextUtils Today!</strong>
      </button>
    </h2>
    <div id="flush-collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div style={props.mode=='dark' ? {backgroundColor: 'rgb(118,118,118)',color: 'white'} : {backgroundColor: 'white',color: 'black'}} className="accordion-body">At TextUtils, we continuously strive to enhance your text editing experience. Our team is dedicated to implementing new features and improvements based on user feedback and evolving trends. We value your suggestions and are committed to delivering a robust and reliable text editing tool that caters to your needs.
<br/>
Start using TextUtils today and unlock the full potential of your text editing capabilities. Empower yourself with our versatile features and make your text editing tasks a breeze!</div>
    </div>
  </div>
</div>
<h4 className='my-5'>Join the TextUtils community and revolutionize your text editing experience!</h4>
</div>
    </>
  )
}