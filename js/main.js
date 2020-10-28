document.addEventListener('DOMContentLoaded', function() { 
    
  faqItems = document.getElementsByClassName('faq-item')
  for (const faqItem of faqItems) {
      faqItem.addEventListener('click', (e) => {toggleFaq(faqItem, faqItems)})
  }
})

const toggleFaq = (faqItem, faqItems) => { 
  for (const item of faqItems) {
      if (faqItem !== item)
      {
          item.classList.add('hidden')
      }
  }
  faqItem.classList.toggle('hidden')
}