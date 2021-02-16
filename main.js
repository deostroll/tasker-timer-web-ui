function attachEvent(el, eventName, fn) {
	el.addEventListener(eventName, fn, false);
}

attachEvent(window, 'load', function() {
	console.log('loaded');
  var defaultValue = '00:00:00';
  var tinput = document.getElementById('tinput');
  
	var btns = document.querySelectorAll('.btn-group > button');
  btns.forEach(b => attachEvent(b, 'click', function(e){
  	controller.add(this.innerText);
  }));
  
  var cmdbtns = document.querySelectorAll('.cmd');
  cmdbtns.forEach(a => attachEvent(a, 'click', function(e) {
  	let a = this;
	if(a.id === 'clear') {
		controller.clearValue();
		e.preventDefault();
	}
	else {
		a.href = `/start?val=${encodeURIComponent(controller.getValue()) }`	
	}
  }));
	
  var controller = {
  	setValue(text) {
  		tinput.value = text;
  	},
  	getValue () {
  		return tinput.value;
  	},
  	clearValue() {
  		controller.setValue('00:00:00');
  	},
    add(num) {
    	let currentValue = controller.getValue();
      let time_string = currentValue.split(':').join('');
      time_string += num;
      time_string = time_string.substr(1);
      time_string = `${time_string.substr(0,2)}:${time_string.substr(2,2)}:${time_string.substr(4,2)}`;
      controller.setValue(time_string);
    }
  };
  
  controller.setValue(defaultValue);
  
});
