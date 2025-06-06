
import React, { useState } from 'react';
import { ThemeProvider } from "@/contexts/ThemeContext";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Edit, Save, Plus, Trash2 } from 'lucide-react';

const Posts = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "AVL-Bäume: Selbstbalancierende Binärbäume verstehen",
      content: `AVL-Bäume, benannt nach ihren Erfindern Adelson-Velsky und Landis, sind eine der elegantesten Datenstrukturen in der Informatik. Sie lösen ein fundamentales Problem binärer Suchbäume: die Degeneration zu linearen Listen.

## Was macht AVL-Bäume besonders?

Der Schlüssel liegt in der **Balance-Eigenschaft**: Für jeden Knoten darf sich die Höhe der beiden Teilbäume maximal um 1 unterscheiden. Diese einfache Regel garantiert logarithmische Operationszeiten.

## Die vier Rotationstypen

1. **Links-Rotation**: Korrigiert Rechtslastigkeit
2. **Rechts-Rotation**: Korrigiert Linkslastigkeit  
3. **Links-Rechts-Rotation**: Doppelrotation für Zickzack-Muster
4. **Rechts-Links-Rotation**: Doppelrotation für umgekehrtes Zickzack

## Komplexität

- **Suchen**: O(log n)
- **Einfügen**: O(log n) 
- **Löschen**: O(log n)
- **Speicher**: O(n)

## Praktische Anwendungen

AVL-Bäume finden sich in Datenbanken, Compilern und überall dort, wo garantiert schnelle Suchoperationen benötigt werden.

Die Schönheit von AVL-Bäumen liegt in ihrer Selbstregulierung - sie sind ein perfektes Beispiel für elegante Algorithmen in der Praxis.`,
      category: "Datenstrukturen",
      date: "2024-06-04",
      author: "Mark Baumann"
    }
  ]);

  const [editingPost, setEditingPost] = useState(null);
  const [editContent, setEditContent] = useState('');

  const startEditing = (post) => {
    setEditingPost(post.id);
    setEditContent(post.content);
  };

  const savePost = () => {
    setPosts(posts.map(post => 
      post.id === editingPost 
        ? { ...post, content: editContent }
        : post
    ));
    setEditingPost(null);
    setEditContent('');
  };

  const addNewPost = () => {
    const newPost = {
      id: Date.now(),
      title: "Neuer Blog Post",
      content: "# Neuer Blog Post\n\nHier ist der Inhalt des neuen Posts...",
      category: "Allgemein",
      date: new Date().toISOString().split('T')[0],
      author: "Mark Baumann"
    };
    setPosts([...posts, newPost]);
  };

  const deletePost = (id) => {
    setPosts(posts.filter(post => post.id !== id));
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">
        <Navigation />
        <div className="pt-32 px-6 pb-20">
          <div className="max-w-6xl mx-auto">
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
                Posts bearbeiten
              </h1>
              <button
                onClick={addNewPost}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-3 rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
              >
                <Plus size={20} />
                Neuer Post
              </button>
            </div>

            <div className="space-y-6">
              {posts.map((post) => (
                <div key={post.id} className="bg-white dark:bg-white/10 backdrop-blur-md border border-gray-300 dark:border-white/20 rounded-xl p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 dark:text-white/60 text-sm">
                        {post.date} • {post.category}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      {editingPost === post.id ? (
                        <button
                          onClick={savePost}
                          className="text-green-600 hover:text-green-800 p-2"
                        >
                          <Save size={20} />
                        </button>
                      ) : (
                        <button
                          onClick={() => startEditing(post)}
                          className="text-blue-600 hover:text-blue-800 p-2"
                        >
                          <Edit size={20} />
                        </button>
                      )}
                      <button
                        onClick={() => deletePost(post.id)}
                        className="text-red-600 hover:text-red-800 p-2"
                      >
                        <Trash2 size={20} />
                      </button>
                    </div>
                  </div>

                  {editingPost === post.id ? (
                    <textarea
                      value={editContent}
                      onChange={(e) => setEditContent(e.target.value)}
                      className="w-full h-96 p-4 border border-gray-300 dark:border-white/20 rounded-lg bg-white dark:bg-white/5 text-gray-900 dark:text-white resize-none font-mono text-sm"
                      placeholder="Post-Inhalt bearbeiten..."
                    />
                  ) : (
                    <div className="bg-gray-50 dark:bg-white/5 p-4 rounded-lg">
                      <pre className="whitespace-pre-wrap text-sm text-gray-700 dark:text-white/80 font-mono">
                        {post.content.substring(0, 200)}...
                      </pre>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Posts;
