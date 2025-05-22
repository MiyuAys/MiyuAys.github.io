function adjustSize() {
  const element = document.querySelector('.element');
  const baseWidth = 1920; // 設計稿基準寬度
  const currentWidth = window.innerWidth;
  const scale = currentWidth / baseWidth;
  
  // 限制縮放範圍
  const minScale = 0.5;
  const maxScale = 1.2;
  const finalScale = Math.min(maxScale, Math.max(minScale, scale));
  
  element.style.transform = `scale(${finalScale})`;
}

// 初始化及監聽視窗變化
window.addEventListener('resize', adjustSize);
adjustSize(); // 初始執行