import { IrealProParser, IrealSong } from './iRealProParser';

describe('IrealProParser', () => {
  describe('parseFromUrl', () => {
    it('should parse a valid iReal Pro URL correctly', () => {
      const testUrl = "irealb://All%20Of%20Me=Gerald%20Marks=Medium%20Swing=C===YmFzZTY0RW5jb2RlZENoYXJ0RGF0YQ==";
      
      const result = IrealProParser.parseFromUrl(testUrl);
      
      expect(result).toEqual({
        title: "All Of Me",
        composer: "Gerald Marks",
        style: "Medium Swing",
        key: "C",
        chords: [] // Empty because our test data is not real chart data
      });
    });

    it('should handle URLs without irealb:// prefix', () => {
      const testUrl = "All%20Of%20Me=Gerald%20Marks=Medium%20Swing=C===YmFzZTY0RW5jb2RlZENoYXJ0RGF0YQ==";
      
      const result = IrealProParser.parseFromUrl(testUrl);
      
      expect(result.title).toBe("All Of Me");
    });

    it('should throw error for invalid URL format', () => {
      const invalidUrl = "invalid-url-format";
      
      expect(() => {
        IrealProParser.parseFromUrl(invalidUrl);
      }).toThrow('Invalid iReal Pro URL format');
    });

    it('should correctly decode URI components in metadata', () => {
      const testUrl = "My%20Song%20%26%20Your%20Song=John%20Doe%20Jr.=Jazz%20Swing=Dm===YmFzZTY0RW5jb2RlZENoYXJ0RGF0YQ==";
      
      const result = IrealProParser.parseFromUrl(testUrl);
      
      expect(result.title).toBe("My Song & Your Song");
      expect(result.composer).toBe("John Doe Jr.");
    });
  });

  describe('chord normalization', () => {
    // We'll test the normalizeChord method indirectly through parseFromUrl
    // with a URL that contains actual chord data
    it('should normalize chord symbols correctly', () => {
      // Base64 encoded string containing "Cmaj7 Am7 Dm7 G7"
      const chartData = btoa("Cmaj7 Am7 Dm7 G7");
      const testUrl = `Test=Composer=Style=C===${chartData}`;
      
      const result = IrealProParser.parseFromUrl(testUrl);
      
      expect(result.chords).toContain('CM7'); // maj7 -> M7
      expect(result.chords).toContain('Am7');
      expect(result.chords).toContain('Dm7');
      expect(result.chords).toContain('G7');
    });

    it('should handle all chord substitutions', () => {
      // Base64 encoded string containing various chord symbols
      const chartData = btoa("Cmaj7 C^7 Cm7 C-7 Cø Co");
      const testUrl = `Test=Composer=Style=C===${chartData}`;
      
      const result = IrealProParser.parseFromUrl(testUrl);
      
      expect(result.chords).toEqual([
        'CM7',    // from maj7
        'CM7',    // from ^7
        'Cm7',    // already correct
        'Cm7',    // from -7
        'Cm7b5',  // from ø
        'Cdim7',  // from o
      ]);
    });
  });

  describe('error handling', () => {
    it('should handle invalid base64 data', () => {
      const testUrl = "Test=Composer=Style=C===invalid-base64";
      
      expect(() => {
        IrealProParser.parseFromUrl(testUrl);
      }).toThrow('Invalid iReal Pro encoding');
    });

    it('should handle missing chart data', () => {
      const testUrl = "Test=Composer=Style=C";
      
      expect(() => {
        IrealProParser.parseFromUrl(testUrl);
      }).toThrow('Invalid iReal Pro URL format');
    });

    it('should handle empty chart data', () => {
      const testUrl = "Test=Composer=Style=C===";
      
      const result = IrealProParser.parseFromUrl(testUrl);
      expect(result.chords).toEqual([]);
    });
  });

  describe('convertToAppFormat', () => {
    it('should convert IrealSong to app format', () => {
      const irealSong: IrealSong = {
        title: "Test Song",
        composer: "Test Composer",
        style: "Jazz",
        key: "C",
        chords: ["CM7", "Am7", "Dm7", "G7"]
      };
      
      const result = IrealProParser.convertToAppFormat(irealSong);
      
      expect(result).toEqual(["CM7", "Am7", "Dm7", "G7"]);
    });
  });
}); 