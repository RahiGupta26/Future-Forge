import { createSlice } from '@reduxjs/toolkit';

const loadSavedBookmarks = () => {
  try {
    const data = localStorage.getItem('futureforge_bookmarks');
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
};

const initialState = {
  items: loadSavedBookmarks()
};

const bookmarksSlice = createSlice({
  name: 'bookmarks',
  initialState,
  reducers: {
    toggleBookmark: (state, action) => {
      const career = action.payload;
      const index = state.items.findIndex(item => item.id === career.id);
      if (index >= 0) {
        state.items.splice(index, 1);
      } else {
        state.items.push({
          id: career.id,
          title: career.title,
          icon: career.icon,
          tagline: career.tagline,
          color: career.color,
          gradient: career.gradient
        });
      }
      localStorage.setItem('futureforge_bookmarks', JSON.stringify(state.items));
    },
    removeBookmark: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
      localStorage.setItem('futureforge_bookmarks', JSON.stringify(state.items));
    },
    clearBookmarks: (state) => {
      state.items = [];
      localStorage.removeItem('futureforge_bookmarks');
    }
  }
});

export const { toggleBookmark, removeBookmark, clearBookmarks } = bookmarksSlice.actions;

export const selectBookmarks = (state) => state.bookmarks.items;
export const selectBookmarksCount = (state) => state.bookmarks.items.length;
export const selectIsBookmarked = (id) => (state) =>
  state.bookmarks.items.some(item => item.id === id);

export default bookmarksSlice.reducer;
