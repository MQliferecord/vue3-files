/**
 * 1.拿到所有的图片，绑定占位符data-src
 * 2.遍历图片判断是否到了可视区域
 * 3.如果到了设置src属性,不然不具备src属性
 * 4.绑定window的scroll事件，对其进行监听
 */

const defaultImg = 'https://images.alphacoders.com/116/1169181.jpg'

class LazyLoadImage {
    _observer: IntersectionObserver | null;
    _loadingImage: string;
  
    constructor(option: object = {}) {
      this._observer = null;
      // @ts-ignore
      this._loadingImage = defaultImg;
      this.init();
    }
  
    init() {
      this._observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
             // @ts-ignore
            const url = entry.target.getAttribute('data-src');
             // @ts-ignore
            entry.target.setAttribute('src', url);
            entry.target.setAttribute('data-src', '');
            this._observer && this._observer.unobserve(entry.target);
          }
        })
      }, {
        root: null,
        rootMargin: "500px 200px 1000px 200px", 
        threshold: 0.1
      })
    }	
  
    add(entry: any) {
      this._observer && this._observer.observe(entry.el);
    }
  }

const lazyload = new LazyLoadImage()

export default {
  install (app:any) {
    app.directive('lazyImg', {
      mounted (el:any, binding:any) {
        el.setAttribute('data-src', binding.value);
        el.setAttribute('src', lazyload._loadingImage);
        lazyload.add({el: el, val: binding.value});
       }
    })
  }
}

