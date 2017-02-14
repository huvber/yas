const yas = (selector) => {

  const setContainerDim = (list) => {
    const emptyfirst = document.createElement('li')
    emptyfirst.innerHTML = '&nbsp;'
    list.insertBefore(emptyfirst,list.querySelectorAll('li')[0])
    const elements = list.querySelectorAll('li')
    let width = 0;
    elements.forEach((e)=>{
      width += e.offsetWidth
    })
    list.style.width = width + 'px'
    return elements
  }

  const mobile = window.innerWidth >= 768 ? 1 : 0
  console.log(window.innerWidth, mobile)
  //select the list of element in the slider
  const list = document.querySelector(selector)

  //check if is a proper list
  if(!list || list.nodeName !== 'UL')
    throw new Error('Malformed slider container')

  //create the container element and replace it to the list
  const yasContainer = document.createElement('div')
  yasContainer.classList.add('yas-container')
  const parent = list.parentElement
  parent.replaceChild(yasContainer, list)

  //add the list inside the slider container
  yasContainer.appendChild(list)

  //create prev and next button
  const prev = document.createElement('div')
  const next = document.createElement('div')
  yasContainer.appendChild(prev)
  yasContainer.appendChild(next)
  prev.classList.add('yas-control-left')
  next.classList.add('yas-control-right')
  prev.innerHTML = '&larr;'
  next.innerHTML = '&rarr;'

  //set proper size to container list
  const elements = setContainerDim(list)
  //set the active elements
  let active = list.dataset.active ? parseInt(list.dataset.active) : 1
  elements[active].classList.add('active')
  const scrollList = () => {
    let scroll = 0
    elements.forEach((e, i)=> {
      if((i + mobile) < active)
        scroll += e.offsetWidth
    })
    list.style.transform = `translateX(-${scroll}px)`
  }
  scrollList()

  next.addEventListener('click',()=>{
    if(active + 1 < elements.length){
      elements[active].classList.remove('active')
      active++
      elements[active].classList.add('active')
      scrollList()
    }
  })

  prev.addEventListener('click',()=>{
    console.log(active)
    if(active - 1 > 0){
      elements[active].classList.remove('active')
      active--
      elements[active].classList.add('active')
      scrollList()
    }
  })

  elements.forEach((e, i) => {
    e.addEventListener('click',() => {
      elements[active].classList.remove('active')
      active = i
      elements[active].classList.add('active')
      scrollList()
    })
  })
}
