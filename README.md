# Giphy


* **ELABORADO POR** _Claudia Trujillo Blanco
* **Curso** _Unidad 3: ¿Qué significa traer datos de un servidor asíncronamente?.

![image](https://user-images.githubusercontent.com/37419350/45051526-f556ae80-b049-11e8-824a-4cbcac8c6827.png)

# ¿Cómo funciona Gyphy?
Gyphy es un aplicación móvil y de escritorio, vamos a darle la oportunidad a nuestros usuarios de buscar GIFs y mostrarlo de la manera más amigable y entretenida posible, para esto usaremos el API de Giphy.

## PETICIONES ASINCRONAS, ¿QUÉ ES?
Una petición asíncrona es una operación que, mientras esté siendo procesada, deja libre al navegador para que pueda hacer otras operaciones.

En este caso las vamos a realizar las peticiones con Jquery. Jquery dispone de muchos métodos para realizar las peticiones, pero en este caso usaremos $.Ajax(). Una vez terminada la petición Ajax, usaremos métodos con los que podemos recoger los datos recibidos, o controlar si ha habido algún error, o simplemente hacer algo cuando termine la petición.

.done: Si la petición Ajax se ha realizado correctamente, entra en este método. En data están los datos enviados por el servidor.

.fail: Se ejecuta si ha ocurrido algún problema en la petición, por ejemplo cuando la url especificada no existe. 




