
  const letters = 'gclsthmnoxypqabuzridefjkvw';
    const letter = letters.split('');
 
    const slider = document.getElementById('slider');
     const content = document.getElementById('content');
     const name = document.getElementById('name');
     const space = document.getElementById('space');
     const reset = document.getElementById('reset');
     const greet = document.querySelector('.greet');

    space.addEventListener('click', _ =>{
      name.value+=" ";
    });
    reset.addEventListener('click', _ =>{
      name.value = "";
      greet.textContent = '';
    })

    
    
    slider.oninput = function(){
      content.textContent = letter[this.value];
    }
    slider.onclick= function(){
      name.value += content.textContent;
    }
    
    const submit = document.getElementById('submit');


    submit.addEventListener('click', function(){
    	

    	const split = name.value.split('');
    	const greeting = 'Hello! ';
    	split.unshift(greeting);
    	let id;

    	function textAnimate(){

 		if(split.length > 0){
    		greet.textContent += split.shift();
    		id = setTimeout(textAnimate, 180);

    	}else{

			clearTimeout(id);

    	}
    	}

    	textAnimate();


    })