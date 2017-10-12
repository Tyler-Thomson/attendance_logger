This is an attendance logger I am building.

As per specifications, the app needs to render a form for students to enter their email address into. 

--- Part One ---
----------------

When students submit their email, the app will collect their ip address, and use that to obtain their MAC address ( students and server will be on same LAN). 

If this is a new email address, the MAC and email address will be saved to the created student instance.

If registered email, but new MAC, the MAC address will be saved to the student instance.

If registered email and registered MAC, no action taken.

--- Part 2 ---
--------------
Over the course of the day, at specified times, the network will be scanned and MAC addresses collected to be compared against the saved MAC addresses. Where there are collisions, the student will be counted as present, and if none of the MAC addresses in the student instance's mac_address field collide with those on the network, they will be counted as absent.
