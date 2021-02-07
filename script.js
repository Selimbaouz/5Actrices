$(function(){
        //Variable contenant tout les li
        var $mainMenuItems = $("#main-menu ul").children("li");
        var totalMainMenuItems = $mainMenuItems.length; //5 li
        var openedIndex = -1; //index à -1 qui représente les div fermées

            init = function(){

                $mainMenuItems.children(".images").click(function(){
                    //La variable qui est cliqué, on récupere l'index de son parent de 0 à 5 selon ce qui est cliqué
                    var newIndex = $(this).parent().index();
                    checkAndAnimateItem(newIndex);
                });

                $(".button").hover(
                    function () {
                        $(this).addClass("hovered");
                },
                    function () {
                        $(this).removeClass("hovered");
                    }
                    );

                $(".button").click(function () {
                    var newIndex = $(this).index();
                    checkAndAnimateItem(newIndex);
                });

            },

                //fonction qui permet de vérifier si l'index est bien compris entre 0 et 5
                validIndex = function(indexToCheck){

                    return(indexToCheck >= 0) && (indexToCheck < totalMainMenuItems);
                },

            //Fonction qui permet de ouvrir et fermer l'index donc de passé de bw à color grâce à true de toOpen ou False
            animateItem = function ($item, toOpen, speed) {

                var $colorImage = $item.find(".color");
                var itemParam = toOpen ? {width: "420px"} : {width: "140px"};
                var colorImageParam = toOpen ? {left:"0px"} : {left: "140px"};

                $colorImage.animate(colorImageParam,speed);
                $item.animate(itemParam, speed);
            },

            checkAndAnimateItem = function (indexToCheckAndAnimate) {
                //Si l'index bw est égale au nouvelle index color alors on referme l'index
                if(openedIndex === indexToCheckAndAnimate)
                {
                    animateItem($mainMenuItems.eq(indexToCheckAndAnimate), false, 250);
                    openedIndex = -1;
                }
                else
                {
                    //On vérifie si newIndex est bien compris entre 0 et 5 pour l'ouverture
                    if (validIndex(indexToCheckAndAnimate))
                    {
                        //La div est fermé grâce à false
                        animateItem($mainMenuItems.eq(openedIndex), false, 250);
                        //On donne le nouvel index
                        openedIndex = indexToCheckAndAnimate;
                        //et on ouvre l'index
                        animateItem($mainMenuItems.eq(openedIndex), true, 250);
                    }
                }
            };

    init();
});