const Socket = io();
let connectionsUsers = [];

Socket.on("admin_list_all_users", connections => {
    connectionsUsers = connections;
    document.getElementById("list_users").innerHTML = "";

    let template = document.getElementById("template").innerHTML;

    connections.forEach(connection => {
        const rendered = Mustache.render(template, {
            email: connection.user.email,
            id: connection.Socket_id,
        });

        document.getElementById("list_users").innerHTML += rendered;
    });
});

function call(id) {
    const connection = connectionsUsers.find(
        (connection) => connection.socket_id === id
    );

    console.log(connectionsUsers);

    const template = document.getElementById("admin_template").innerHTML;
    const rendered = Mustache.render(template, {
        email: connection.user.email,
        id: connection.user_id,
    });

    document.getElementById("supports").innerHTML += rendered;
}
