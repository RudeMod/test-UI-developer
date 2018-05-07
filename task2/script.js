window.onload = function() {

        var videoEl = document.getElementsByTagName('video')[0];
        //Перехватчик времени для показа иконки
        videoEl.addEventListener('timeupdate', function () {
            var time = this.currentTime;
            if (time >= 24 && time < 27) {
                videoIcon.classList.remove('hidden');
            }
            else {
                videoIcon.classList.add('hidden');
            }
        }, false);
        
        //На случай если видео будет запущено нестандартным способом
        videoEl.addEventListener('play', function () {
            if (document.getElementById('popup').classList.contains('show')) {
                this.pause();
            }
        }, false);
        
        var videoIcon = document.getElementById('videoIcon');
        //Обработка нажатия на всплывающую иконку
        videoIcon.addEventListener('click', function () {
            videoEl.pause();
            document.getElementById('popup').classList.add('show');
        }, false);
        
        //Обработка нажатия на иконку закрытия
        var closeIcon = document.getElementById('closeIcon');
        closeIcon.addEventListener('click', function () {
            document.getElementById('popup').classList.remove('show');
        });
};