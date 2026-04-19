ymaps.ready(init);
    function init() {
        const map = new ymaps.Map('evac-map', {
            center: [55.0, 55.0],
            zoom: 3,
            controls: ['zoomControl', 'fullscreenControl']
        });

        // Вспомогательная функция для создания маркеров с пресетом
        function createPlacemark(coords, title, fileUrl, color) {
            return new ymaps.Placemark(coords, {
                balloonContent: `<b>${title}</b><br>
                                 <a href="${fileUrl}" target="_blank" 
                                    style="background:#b76e3c; color:white; border:none; padding:5px 15px; border-radius:30px; margin-top:8px; font-weight:bold; display:inline-block; text-decoration:none;">
                                    ➡️ подробнее
                                 </a>`
            }, {
                preset: 'islands#circleIcon',
                iconColor: color,
                balloonMaxWidth: 300
            });
        }

        // Пункты прибытия (зелёные)
        const arrivals = [
            {coords:[43.222,76.851], title:'Казахская ССР (Алма-Ата)', file:'templates/kazakhstan.html'},
            {coords:[41.311,69.279], title:'Узбекская ССР (Ташкент)', file:'templates/uzbekistan.html'},
            {coords:[42.874,74.569], title:'Киргизская ССР (Фрунзе)', file:'templates/kirgizia.html'},
            {coords:[37.960,58.326], title:'Туркменская ССР (Ашхабад)', file:'templates/turkmenia.html'},
            {coords:[38.559,68.787], title:'Таджикская ССР (Сталинабад)', file:'templates/tadgikistan.html'},
            {coords:[53.200,50.150], title:'Куйбышев (Самара)', file:'templates/kuibishev.html'},
            {coords:[48.708,44.513], title:'Сталинград', file:'templates/stalingrad.html'},
            {coords:[51.533,46.034], title:'Саратовская область', file:'templates/saratov.html'},
            {coords:[54.734,55.957], title:'Башкирская АССР (Уфа)', file:'templates/bashkiria.html'},
            {coords:[54.782,32.045], title:'Смоленск', file:'templates/smolensk.html'},
            {coords:[56.838,60.605], title:'Свердловск (Урал)', file:'templates/sverdlovsk.html'},
            {coords:[55.041,82.935], title:'Новосибирск (Сибирь)', file:'templates/novosibirsk.html'},
            {coords:[57.152,65.527], title:'Тюмень', file:'templates/tyumen.html'},
            {coords:[40.000,52.997], title:'Красноводск (порт приёма)', file:'templates/krasnovodsk.html'}
        ];

        arrivals.forEach(a => {
            const placemark = createPlacemark(a.coords, a.title, a.file, '#008000');
            map.geoObjects.add(placemark);
            placemark.events.add('click', function () {
                placemark.balloon.open();
            });
        });

        // Пункты отправления (красные)
        const departures = [
            {coords:[59.939,30.315], title:'Ленинград', file: 'templates/leningrad.html'},
            {coords:[55.755,37.617], title:'Москва', file: 'templates/moscow.html'},
            {coords:[50.450,30.523], title:'Киев', file: 'templates/ukrain.html'},
            {coords:[53.904,27.561], title:'Минск', file: 'templates/belorussia.html'},
            {coords:[46.485,30.743], title:'Одесса', file: 'templates/ukrain.html'},
            {coords:[47.910,33.391], title:'Кривой Рог', file: 'templates/ukrain.html'},
            {coords:[49.993,36.230], title:'Харьков', file: 'templates/ukrain.html'},
            {coords:[47.838,35.140], title:'Запорожье', file: 'templates/ukrain.html'},
            {coords:[48.022,37.802], title:'Донбасс (Донецк)', file: 'templates/ukrain.html'},
            {coords:[56.946,24.105], title:'Рига', file: 'templates/riga.html'},
            {coords:[59.437,24.753], title:'Таллин', file: 'templates/tallin.html'},
            {coords:[54.687,25.280], title:'Вильнюс', file: 'templates/vilnus.html'}
        ];

        departures.forEach(d => {
            const placemark = createPlacemark(d.coords, d.title, d.file, '#E31A1C');
            map.geoObjects.add(placemark);
            placemark.events.add('click', function () {
                placemark.balloon.open();
            });
        });
    }