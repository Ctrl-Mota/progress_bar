new Vue({
    el: '#app',
    data:{
      width : '0',
      colorlen: '',
      security: ''
    },
    methods:{

      iniciarProgresso(e) {
        let len_char = e.target.value.length;
        let maxlen = e.target.maxLength;
        let porcent = len_char/maxlen*100;

        this.width = `${porcent}%`;

          if(porcent > 90){
            this.colorlen = 'green';
            this.security = 'Muito bom';

          }else if(porcent > 60){
            this.colorlen = 'orange';
            this.security = 'Medio';
            
          }else if(porcent == 0){
            this.security = '';
                      
          }else{
            this.colorlen = 'red';
            this.security = 'Baixa';

          }
        }
    }
  })