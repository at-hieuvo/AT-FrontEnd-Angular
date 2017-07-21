// var $btn = document.getElementById('js-submit');
// var $input = document.getElementById('js-name');
// var $content = document.getElementById('js-content');
// var $del = document.getElementById('del');
// $btn.addEventListener('click', function () {
//     var name = $input.value;
//     var $newMem = document.createElement('li');
//     var $span = document.createElement('span');
//     var $del = document.createElement('button');
//     $span.innerHTML = name;
//     $newMem.appendChild($span);
//     $newMem.appendChild($del);
//     $content.appendChild($newMem);
//     $del.innerHTML ='Delete';
//     $del.addEventListener('click', function(){
//     	//console.log('test');
//     	var $element = this.parentNode;
//     	$content.removeChild($element);
//     });
// });;
// 
 var $name = document.getElementById('js-name');
 var $submit = document.getElementById('js-submit')
 var $list = document.getElementById('js-content');
 class Member{	
 	domElm: any;	
 	constructor(private name:  string  = 'NoName'){		
 		this.domElm = document.createElement('li');		
 		this.domElm.className = 'list-group-item';		
 		this.settingContent();		
 		this.addingButton();	
 	}	 	settingContent(){		
 		let $span = document.createElement('span');		
 		$span.innerHTML = this.name;		
 		this.domElm.appendChild($span);	
 	}
 	addingButton(){		
 		let $delBtn = document.createElement('button');		
 		$delBtn.className = 'btn btn-primary btn-xs pull-right';		
 		$delBtn.innerHTML = 'Delete';		
 		this.domElm.appendChild($delBtn);		
 		$delBtn.addEventListener('click', (e) => {			
 			let $parentElm = e.target.parentNode;			
 			$list .removeChild($parentElm);
 		});	
 	}
 }
$submit.addEventListener('click', function(){
 	let name: any = $name.value;	
 	let member = new Member(name);
 	$list .appendChild(member.domElm);
});





   