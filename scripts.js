$(document).ready(function () {
    const $yesBtn = $(".yes-btn");
    const $noBtn = $(".no-btn");
    const $question = $(".question");
    const $gif = $(".gif");$(document).ready(function () {
    const $yesBtn = $(".yes-btn");
    const $noBtn = $(".no-btn");
    const $question = $(".question");
    const $gif = $(".gif");
    const $wrapper = $(".wrapper");
    let hoverInterval;

    // Change text and gif when the Yes button is clicked
    $yesBtn.on("click", function () {
        $question.html("Being with you is my biggest blessing. I love you.");
        $gif.attr(
            "src",
            "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbGNhdXh1b252b2F2b2U4cHRlNGkwMDZsajllaGF1cDJyb2p4NXl2YiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/G6N0pDDgDpLjUvNoyQ/giphy.gif"
        );

        // Hide the No button
        $noBtn.hide();
    });

    // Function to randomly move the No button
    function moveNoButton() {
        const wrapperRect = $wrapper[0].getBoundingClientRect();
        const noBtnRect = $noBtn[0].getBoundingClientRect();

        // Calculate max positions within the wrapper
        const maxX = wrapperRect.width - noBtnRect.width;
        const maxY = wrapperRect.height - noBtnRect.height;

        // Generate random positions, accounting for wrapper's offset
        const randomX = Math.random() * maxX + wrapperRect.left;
        const randomY = Math.random() * maxY + wrapperRect.top;

        // Apply the random position while ensuring the button stays inside the wrapper
        $noBtn.css({
            position: "absolute", // Ensure the button moves relative to its container
            left: randomX - wrapperRect.left + "px",
            top: randomY - wrapperRect.top + "px",
        });
    }

    // Move the "No" button every frame when hovering
    $noBtn.on("mouseenter", function () {
        hoverInterval = setInterval(moveNoButton, 200); // Move every 200ms
    });

    // Stop moving when the mouse leaves the button
    $noBtn.on("mouseleave", function () {
        clearInterval(hoverInterval);
    });

    // Move the button on click as well
    $noBtn.on("click", moveNoButton);
});

    const $wrapper = $(".wrapper");
    let hoverInterval;

    // Change text and gif when the Yes button is clicked
    $yesBtn.on("click", function () {
        $question.html("Being with you is my biggest blessing. I love you.");
        $gif.attr(
            "src",
            "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbGNhdXh1b252b2F2b2U4cHRlNGkwMDZsajllaGF1cDJyb2p4NXl2YiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/G6N0pDDgDpLjUvNoyQ/giphy.gif"
        );

        // Hide the No button
        $noBtn.hide();
    });

    // Function to randomly move the No button
    function moveNoButton() {
        const wrapperRect = $wrapper[0].getBoundingClientRect();
        const noBtnRect = $noBtn[0].getBoundingClientRect();

        // Calculate max positions to ensure the button stays within the wrapper
        const maxX = wrapperRect.width - noBtnRect.width;
        const maxY = wrapperRect.height - noBtnRect.height;

        // Generate random positions within bounds
        const randomX = Math.random() * maxX;
        const randomY = Math.random() * maxY;

        // Apply the random position to the "No" button
        $noBtn.css({
            left: randomX + "px",
            top: randomY + "px",
        });
    }

    // Move the "No" button every frame when hovering
    $noBtn.on("mouseenter", function () {
        hoverInterval = setInterval(moveNoButton, 200); // Move every 200ms
    });

    // Stop moving when the mouse leaves the button
    $noBtn.on("mouseleave", function () {
        clearInterval(hoverInterval);
    });

    // Move the button on click as well
    $noBtn.on("click", moveNoButton);
});
