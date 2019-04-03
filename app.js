/*
 * Vores absolut mindste Vue todo app 
 */


 /** 
  *   Dette er vores "model" til vores app. Det ville typisk være ting der kom fra f.eks en web api
  */
let todos = [{
    name: "Debug vores UI",
    complete: false,
},{
    name: "Refactor alle vores fejl",
    complete: true,
},{
    name: "Opgradere vores app",
    complete: false
}]


/* 
 *   Alle vue appliaktioner bliver initialiseret vha new vue
 */
new Vue({
    /* Vores 'el' element fortæller hvor henne i vores applikation den skal loade vores app. Det kaldes for bootstrapping */
    el: '#app',

    /* 
     *  Vores templete definere vores basis struktur for vores appliaktion
     */
    template: "#app-template",

    /**
     * Vores data element bliver kaldt af vores component og returnere det der bliver til vores datamodel for componenten
     * De todos der kommer ind dem vi har defineret i toppen
     */
    data:()=>(
        {
            todos,
            text: '',
            showComplete: true,
        }
    ),


    /**
     * Computed properties er det samme som data. Men istedet for at indehodle specifikke værdier indeholder det funktioner.
     * Funktionen bliver kaldt og komponenten der kalder den kan bruge værdien der returneres som en normal property
     */
    computed:{

        /**
         * Returnere en liste af todos, med de completed fjernet
         */
        filteredTodos(){
            return this.todos
                .filter(todo=>this.showComplete ? true : !todo.complete);
        },

        /**
         * En bool der fortæller om vores submit er disabled
         */
        submitIsDisabled(){
            return this.text == "";
        }
    },

    /**
     * Methods afsnittet indeholder funktioner som typisk bliver kaldt fra en template, men kan også kaldes andre steder fra
     * I vores template kan vi se addTodo() bliver kaldt
     * Man vil altid benytte dette til at ændre på f.eks vores datamodel
     */
    methods:{
        /**
         * addTodo() tager det der er i vores tekstfelt og ligger det i vores liste.
         * Vue kan selv holde styr på hvad den skal redrawe igen 
         */
        addTodo(){
            todos.push({
                name:this.text,
                complete:false
            });

            /**
             * Vue komponenter kan også få fat i sig selv hva 'this' keywordet
             */
            this.text = ``;
        },
    }
});
