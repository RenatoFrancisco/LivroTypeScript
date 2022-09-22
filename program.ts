import Startup from "./startup";

let port = "5000";

Startup.app.listen(port, function() {
    console.log(`servidor rodando na porta: ${port}`);
});