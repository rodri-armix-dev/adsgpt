export function getDeviceStore(userAgent: string, maxTouchPoints: number): 'apple' | 'google-play' | undefined {
	if (/android/i.test(userAgent)) return 'google-play';
	if (/iPhone|iPad|iPod/i.test(userAgent) || (/Macintosh/i.test(userAgent) && maxTouchPoints > 1)) return 'apple';
	return undefined;
}
