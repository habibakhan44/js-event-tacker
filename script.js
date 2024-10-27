let clickCount = 0;

// Click Event
function incrementClick() {
    clickCount++;
    document.getElementById('clickCounter').textContent = clickCount;
}

function resetClickCounter() {
    clickCount = 0;
    document.getElementById('clickCounter').textContent = 0;
}

// Mouse Move Event
const hoverArea = document.getElementById('hoverArea');
const mouseCoordsDisplay = document.getElementById('mouseCoords');

hoverArea.addEventListener('mousemove', (event) => {
    mouseCoordsDisplay.textContent = `Mouse Position: (X: ${event.offsetX}, Y: ${event.offsetY})`;
});

hoverArea.addEventListener('mouseleave', () => {
    mouseCoordsDisplay.textContent = '';
});
function showLastKey(event) {
    const keyStatus = document.getElementById('keyStatus');
    keyStatus.textContent = `Last key pressed: ${event.key || 'undefined'}`; 
}



function clearKeyboardInput() {
    document.getElementById('keyboardInput').value = '';
    document.getElementById('keyStatus').textContent = "";
}

// Focus and Blur Event
function updateFocus(status) {
    document.getElementById('focusMessage').textContent = `Focus Status: ${status}`;
}

// Window Resize Event
function trackWindowSize() {
    const resizeInfo = document.getElementById('resizeInfo');
    resizeInfo.textContent = `Window size: Width: ${window.innerWidth}, Height: ${window.innerHeight}`;
}

window.addEventListener('resize', trackWindowSize);
trackWindowSize(); // Initialize on load

// Touch Event
document.addEventListener('touchstart', (event) => {
    const touchOutput = document.getElementById('touchOutput');
    const touch = event.touches[0];
    touchOutput.textContent = `Touch position: (X: ${touch.clientX}, Y: ${touch.clientY})`;
});

// Form Submission Event
function submitForm(event) {
    event.preventDefault();
    const statusDisplay = document.getElementById('submissionStatus');
    statusDisplay.textContent = "Submission Status: Submitted!";
}

function resetForm() {
    document.getElementById('submissionForm').reset();
    document.getElementById('submissionStatus').textContent = "Submission Status: Not Submitted";
}

// Drag and Drop Event
function startDrag() {
    document.getElementById('dragStatus').textContent = "Drag Status: Dragging...";
}

function endDrag() {
    document.getElementById('dragStatus').textContent = "Drag Status: Not Dragging";
}

// Media Event
const videoPlayer = document.getElementById('videoPlayer');
const mediaStatusDisplay = document.getElementById('mediaStatus');

videoPlayer.addEventListener('play', () => {
    mediaStatusDisplay.textContent = "Media Status: Playing";
});

videoPlayer.addEventListener('pause', () => {
    mediaStatusDisplay.textContent = "Media Status: Paused";
});


function trackScrollPosition() {
    const scrollTracker = document.getElementById('scrollTracker');
    scrollTracker.textContent = `Scroll Position: ${window.scrollY}`;
}



function handlePaste(event) {
    const pastedText = event.clipboardData.getData('text');
    document.getElementById('pasteOutput').textContent = `Pasted text: ${pastedText}`;
}

function clearPasteInput() {
    document.getElementById('pasteInput').value = '';
    document.getElementById('pasteOutput').textContent = 'Pasted text will appear here.';
}
