// NavControls

const navBtn = document.getElementById('navBtn')
const navBar = document.getElementById('navBar')

let openClass = 'closed'

const toggleNavBar = () => {
  if (navBar.class === 'open') navBar.class = 'closed'
  else navBar.class = 'open'

  if (navBtn.class === 'open') navBtn.class = 'closed'
  else navBtn.class = 'open'
}

// $(document).ready(function(){
// 	$('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function(){
// 		$(this).toggleClass('open');
// 	});
// });
