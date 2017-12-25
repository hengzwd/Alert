(function (global) {
	let Alert = {
		cssdata () {
			return {
				Alert_mask: 'width: 100%; height: 100%; background-color:rgba(0,0,0,.3); position: fixed;top: 0; left:0; z-index: 3;',
				Alert_wrap: 'width: 4rem;height: 2.5rem; border-radius: 0.15rem;box-shadow: 0 0 0.05rem rgba(0,0,0,.5);position: relative;top: 40%;left: 50%;text-align: center;margin-top: -1rem;margin-left: -1.895rem;z-index: 99;background-color: #fff;overflow: hidden;transition: all 0.2s linear;',
                Alert_message: 'width: 4rem;height: 1.8rem;color: rgb(80,80,80);font-size: 0.3rem;line-height: 1.4rem;padding-top: 0.3rem;box-sizing: border-box;background-color: rgb(255,255,255);z-index: 9999;',
                Alert_message_info: 'width: 100%;text-align: left;',
                Alert_ok: 'flex: 1;',
                Alert_close: 'flex: 1;border-left: 0.01rem solid rgb(180,180,180);',
                Alert_input: 'width: 90%;font-size: 0.29rem;box-sizing: border-box;margin: 0 auto;height: 0.5rem;font-size: 0.3rem;border: none;border: 0.01rem solid rgb(180,180,180);-webkit-appearance: none;margin-top: 0.2rem;',
				Alert_bottom: 'width: 100%;height: 0.7rem; display: flex;font-size: 0.26rem;border-top: 0.01rem solid rgb(180,180,180);line-height: 0.7rem;color: rgb(80,80,80);'
			}
		},
		alert (message,fn) {
			let _body = document.body;
			let _mask = this.createMask();
			let _wrap = this.createWrap();
			let _message = this.createMessage();
			let _bottom = this.createBottom();
			let _info = this.createInfo(message,'text-align: center'); 
			let _ok = this.createOk();
			_body.appendChild(_mask);
			_mask.appendChild(_wrap);
			_wrap.appendChild(_message);
			_message.appendChild(_info);
			_bottom.appendChild(_ok);
			_wrap.appendChild(_bottom);
			_ok.onclick = () => {
				_body.removeChild(_mask);
				if(typeof fn === 'function'){
					fn();
				}
			}
		},
		confirm (message,fn_1,fn_2) {
			let _body = document.body;
			let _mask = this.createMask();
			let _wrap = this.createWrap();
			let _message = this.createMessage();
			let _bottom = this.createBottom();
			let _ok = this.createOk();
			let _info = this.createInfo(message,'text-align: center');
			let _close = this.createClose();
			_body.appendChild(_mask);
			_mask.appendChild(_wrap);
			_wrap.appendChild(_message);
			_message.appendChild(_info);
			_bottom.appendChild(_ok);
			_message.appendChild(_info);
			_bottom.appendChild(_close);
			_wrap.appendChild(_bottom);
			_ok.onclick = () => {
				_body.removeChild(_mask);
				if(typeof fn_1 === 'function'){
					fn_1();
				}
			}
			_close.onclick = () => {
				_body.removeChild(_mask);
				if(typeof fn_2 === 'function'){
					fn_2();
				}
			}
		},
		prompt (message,fn_1,fn_2) {
			let _body = document.body;
			let _mask = this.createMask();
			let _wrap = this.createWrap();
			let _message = this.createMessage('line-height: 0.45rem;');
			let _input = this.createInput();
			let _bottom = this.createBottom();
			let _ok = this.createOk();
			let _close = this.createClose();
			let _info = this.createInfo(message,'padding-left: 0.2rem;');
			_body.appendChild(_mask);
			_mask.appendChild(_wrap);
			_wrap.appendChild(_message);
			_message.appendChild(_info);
			_message.appendChild(_input);
			_bottom.appendChild(_ok);
			_bottom.appendChild(_close);
			_wrap.appendChild(_bottom);
			_ok.onclick = () => {
				_body.removeChild(_mask);
				let _value = _input.value;
				if(typeof fn_1 === 'function'){
					fn_1(_value);
				}
			}
			_close.onclick = () => {
				_body.removeChild(_mask);
				if(typeof fn_2 === 'function'){
					fn_2();
				}
			}
		},
		createWrap (add) {
			let _wrap = document.createElement('div');
				_wrap.setAttribute('style',this.cssdata().Alert_wrap + add);
				return _wrap;
		},
		createMask () {
			let _mask = document.createElement('div');
				_mask.setAttribute('style',this.cssdata().Alert_mask);
				return _mask;
		},
		createMessage (fig) {
			let	_message = document.createElement('div');
				_message.setAttribute('style',this.cssdata().Alert_message + fig);
				return _message;
		},
		createOk () {
			let	_ok = document.createElement('div');
				_ok.setAttribute('style',this.cssdata().Alert_ok);
			let	_ok_Text = document.createTextNode('确定');
				_ok.appendChild(_ok_Text);
				return _ok;
		},
		createClose () {
			let	_close = document.createElement('div');
				_close.setAttribute('style',this.cssdata().Alert_close);
			let	_close_Text = document.createTextNode('取消');
				_close.appendChild(_close_Text);
				return _close;
		},
		createBottom () {
			let	_bottom = document.createElement('div');
				_bottom.setAttribute('style',this.cssdata().Alert_bottom);
				return _bottom;
		},
		createInput () {
			let	_input = document.createElement('input');
				_input.setAttribute('style',this.cssdata().Alert_input);
				return _input;
		},
		createInfo (message,fig) {
			let	_info = document.createElement('div');
				_info.setAttribute('style',this.cssdata().Alert_message_info + fig);
			let	_info_Text = document.createTextNode(message);
				_info.appendChild(_info_Text);
				return _info;
		},
		init: function (design,fontSize) {
            let _html = document.getElementsByTagName('html')[0];
            let _width = document.body.clientWidth || document.documentElement.clientWidth;
            let _fontSize = (_width/design*fontSize).toFixed(2);
            _html.style.fontSize = _fontSize + 'px';
            console.log('The fontSize is ' + _fontSize + ' px.')
        }
	}

	if (typeof module !== 'undefined' && module.exports) module.exports = Alert;
    if (typeof define === 'function') define(function() { return Alert; });
    global.Alert = Alert;
})(this)