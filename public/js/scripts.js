function openCategory(e, categoryName){
  const tabcontent = document.getElementsByClassName('tabcontent');
  for(let i = 0; i < tabcontent.length; i++){
    tabcontent[i].style.display = 'none';
  }
  const tablinks = document.getElementsByClassName('tablinks');
  for(let i = 0; i < tablinks.length; i++){
    tablinks[i].className = tablinks[i].className.replace('active', '');
  }
  document.getElementById(categoryName).style.display = 'block';
  console.log(e.currentTarget);
  e.currentTarget.className += ' active';
}
document.getElementById('defaultOpen').onclick()