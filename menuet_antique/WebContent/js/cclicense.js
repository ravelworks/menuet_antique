/*
 * CC License 表示用ライブラリ
 * 使用方法<div class="cc-license cc-by"></div>
 * 指定するクラス。
 * cc-by		表示
 * cc-by-nd		表示 - 改変禁止
 * cc-by-sa		表示 - 継承
 * cc-by-nc		表示 - 非営利
 * cc-by-nc-nd	表示 - 非営利 - 改変禁止
 * cc-by-nc-sa	表示 - 非営利 - 継承
 */
$(document)
		.ready(
				function() {
					var ccdiv = $('.cc-license');
					for ( var dv in ccdiv) {
						var licenseId;
						var licenseName;

						var curDiv = $(ccdiv[dv]);
						if (curDiv.hasClass('cc-by')) {
							licenseId = 'by';
							licenseName = '表示';
						} else if (curDiv.hasClass('cc-by-nd')) {
							licenseId = 'by-nd';
							licenseName = '表示 - 改変禁止';
						} else if (curDiv.hasClass('cc-by-sa')) {
							licenseId = 'by-sa';
							licenseName = '表示 - 継承';
						} else if (curDiv.hasClass('cc-by-nc')) {
							licenseId = 'by-nc';
							licenseName = '表示 - 非営利';
						} else if (curDiv.hasClass('cc-by-nc-nd')) {
							licenseId = 'by-nc-nd';
							licenseName = '表示 - 非営利 - 改変禁止';
						} else if (curDiv.hasClass('cc-by-nc-sa')) {
							licenseId = 'by-nc-sa';
							licenseName = '表示 - 非営利 - 継承';
						}

						var url = 'http://creativecommons.org/licenses/LICENSE_ID/4.0/'
								.replace(/LICENSE_ID/g, licenseId);

						var link = $('<a>', {
							href : url,
							target : '_blank',
							rel : 'license'
						});

						var img = $(
								'<img>',
								{
									src : 'https://i.creativecommons.org/l/LICENSE_ID/4.0/88x31.png'
											.replace(/LICENSE_ID/g, licenseId),
									alt : 'クリエイティブ・コモンズ・ライセンス',
									style : 'border-width: 0'
								});

						link.append(img);

						var msg = 'この作品はクリエイティブ・コモンズ LICENSE_NAME 4.0 国際 ライセンスの下に提供されています。'
								.replace(/LICENSE_NAME/g, licenseName);

						curDiv.append(link).append($('<br>')).append(msg);

					}

				});
