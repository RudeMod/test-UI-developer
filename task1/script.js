window.onload = function() {

	//Невозможно загрузить из-за ошибки No 'Access-Control-Allow-Origin' header 
	//var url = "http://bekey.io/testwork/test.ashx?callback=onUserData";
	
	
	//jsonData получен из jsonData.json
	jsonData.map(function(elem, i) {
		//Заполняем изображения
		let thumbnailImg = $(".thumbnailImg")[i];
		thumbnailImg.src = elem.thumbnail;
		
		//Заполняем заголовки
		let titleName = $(".titleName")[i];
		titleName.innerHTML = elem.title;
		
		//Заполняем описание
		let desc = $(".desc")[i];
		desc.innerHTML = elem.desc;
	});
}