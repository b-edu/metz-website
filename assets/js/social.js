let socials = [
    ["twitter", "https://twitter.com"],
    ["instagram", "https://instagram.com"],
    ["facebook", "https://facebook.com"]
]

let social_wrap = document.getElementById("icon-wrap");

for (let index = 0; index < socials.length; index++) {
    var social_array = socials[index];
    social_wrap.innerHTML += `<a href="${social_array[1]}" target="_blank"><img src="/assets/img/${social_array[0]}-icon.png" alt="${social_array[0]}" class="icon"></a>`
}