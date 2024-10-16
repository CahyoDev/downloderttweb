function downloadTikTok() {
    const url = document.getElementById('videoUrl').value;
    document.getElementById('loading').style.display = 'block';
    document.getElementById('videoDetails').style.display = 'none';

    fetch('/api/tiktok', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ url: url })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            const videoData = data.data;
            document.getElementById('loading').style.display = 'none';
            document.getElementById('videoDetails').style.display = 'block';
            document.getElementById('videoPlayer').src = videoData.play;
            document.getElementById('videoTitle').textContent = videoData.title;

            document.getElementById('downloadVideo').onclick = function () {
                window.location.href = videoData.play;
            };
            document.getElementById('downloadAudio').onclick = function () {
                window.location.href = videoData.music;
            };
        } else {
            alert('Gagal mengambil data video.');
            document.getElementById('loading').style.display = 'none';
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Terjadi kesalahan.');
        document.getElementById('loading').style.display = 'none';
    });
}