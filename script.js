function startCountdown() {
    const weddingDate = new Date("September 3, 2025 10:30:00").getTime();
    const countdownElement = document.getElementById("countdown");
  
    setInterval(() => {
      const now = new Date().getTime();
      const distance = weddingDate - now;
  
      if (distance < 0) {
        countdownElement.innerHTML = "🎉 The big day is here!";
        return;
      }
  
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
      countdownElement.innerHTML = `${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds left`;
    }, 1000);
  }
  
  startCountdown();
  