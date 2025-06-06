
import React, { useState } from 'react';
import { Calendar, User, Edit, Save, X } from 'lucide-react';
import { useAuth } from './Auth';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';
import { Input } from './ui/input';

export const Blog = () => {
  const { isAuthenticated, setShowLoginDialog, logout } = useAuth();
  const [selectedCategory, setSelectedCategory] = useState('Alle');
  const [editingPost, setEditingPost] = useState<number | null>(null);
  const [editedContent, setEditedContent] = useState('');
  const [editedTitle, setEditedTitle] = useState('');
  
  const categories = ['Alle', 'Datenstrukturen', 'KI', 'Web Development', 'Python'];
  
  const [blogPosts, setBlogPosts] = useState([
    {
      title: "AVL-Bäume: Selbstbalancierende Binärbäume verstehen",
      excerpt: "AVL-Bäume sind eine faszinierende Datenstruktur, die automatisch für Balance sorgt. In diesem Artikel erkläre ich die Grundlagen, Rotationen und praktische Anwendungen.",
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
      author: "Mark Baumann",
      readTime: "5 min"
    }
  ]);

  const filteredPosts = selectedCategory === 'Alle' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const [selectedPost, setSelectedPost] = useState(null);

  const handleEditClick = (index: number) => {
    if (!isAuthenticated) {
      setShowLoginDialog(true);
      return;
    }
    setEditingPost(index);
    setEditedTitle(blogPosts[index].title);
    setEditedContent(blogPosts[index].content);
  };

  const handleSaveEdit = (index: number) => {
    const updatedPosts = [...blogPosts];
    updatedPosts[index] = {
      ...updatedPosts[index],
      title: editedTitle,
      content: editedContent
    };
    setBlogPosts(updatedPosts);
    setEditingPost(null);
    setEditedContent('');
    setEditedTitle('');
  };

  const handleCancelEdit = () => {
    setEditingPost(null);
    setEditedContent('');
    setEditedTitle('');
  };

  const renderContent = (content) => {
    return content.split('\n').map((line, index) => {
      if (line.startsWith('## ')) {
        return (
          <h2 key={index} className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
            {line.replace('## ', '')}
          </h2>
        );
      }
      if (line.startsWith('- ')) {
        return (
          <li key={index} className="text-gray-800 dark:text-white/90 ml-6 mb-2">
            {line.replace('- ', '')}
          </li>
        );
      }
      if (line.includes('**') && line.includes('**')) {
        const parts = line.split('**');
        return (
          <p key={index} className="text-gray-800 dark:text-white/90 mb-4 leading-relaxed">
            {parts.map((part, i) => 
              i % 2 === 1 ? <strong key={i}>{part}</strong> : part
            )}
          </p>
        );
      }
      if (line.trim() === '') {
        return <br key={index} />;
      }
      return (
        <p key={index} className="text-gray-800 dark:text-white/90 mb-4 leading-relaxed">
          {line}
        </p>
      );
    });
  };

  return (
    <section id="blog" className="py-20 px-6 bg-gray-50 dark:bg-black transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white animate-fade-in">
            Blog
          </h2>
          {isAuthenticated && !selectedPost && (
            <Button onClick={logout} variant="outline" size="sm">
              Abmelden
            </Button>
          )}
        </div>
        
        {!selectedPost && (
          <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg'
                    : 'bg-white dark:bg-white/10 backdrop-blur-md border border-gray-300 dark:border-white/20 text-gray-800 dark:text-white/80 hover:bg-gray-100 dark:hover:bg-white/20 shadow-sm'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        )}

        {selectedPost ? (
          <div className="bg-white dark:bg-white/10 backdrop-blur-md border border-gray-300 dark:border-white/20 rounded-xl p-8 animate-fade-in shadow-lg max-w-4xl mx-auto relative">
            <div className="flex justify-between items-start mb-6">
              <button 
                onClick={() => {
                  setSelectedPost(null);
                  setEditingPost(null);
                }}
                className="text-blue-600 dark:text-blue-300 hover:text-blue-800 dark:hover:text-white transition-colors duration-300"
              >
                ← Zurück zur Übersicht
              </button>
              
              <Button
                onClick={() => handleEditClick(blogPosts.findIndex(post => post.title === selectedPost.title))}
                variant="ghost"
                size="sm"
                className="p-2"
              >
                <Edit size={16} />
              </Button>
            </div>
            
            {editingPost === blogPosts.findIndex(post => post.title === selectedPost.title) ? (
              <div className="space-y-4">
                <Input
                  value={editedTitle}
                  onChange={(e) => setEditedTitle(e.target.value)}
                  className="text-3xl font-bold"
                />
                <Textarea
                  value={editedContent}
                  onChange={(e) => setEditedContent(e.target.value)}
                  className="min-h-[400px] text-sm"
                />
                <div className="flex gap-2">
                  <Button onClick={() => handleSaveEdit(blogPosts.findIndex(post => post.title === selectedPost.title))} size="sm">
                    <Save size={16} className="mr-1" />
                    Speichern
                  </Button>
                  <Button onClick={handleCancelEdit} variant="outline" size="sm">
                    <X size={16} className="mr-1" />
                    Abbrechen
                  </Button>
                </div>
              </div>
            ) : (
              <>
                <div className="mb-6">
                  <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                    {selectedPost.title}
                  </h1>
                  
                  <div className="flex items-center gap-4 mb-6 text-sm text-gray-600 dark:text-white/60">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      {selectedPost.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <User size={14} />
                      {selectedPost.author}
                    </div>
                    <span>{selectedPost.readTime}</span>
                  </div>
                  
                  <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-600/30 text-blue-700 dark:text-blue-300 rounded-full text-sm border border-blue-200 dark:border-blue-500/50 mb-6">
                    {selectedPost.category}
                  </span>
                </div>
                
                <div className="prose prose-lg max-w-none">
                  {renderContent(selectedPost.content)}
                </div>
              </>
            )}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <article 
                key={post.title}
                className="animate-fade-in bg-white dark:bg-white/10 backdrop-blur-md border border-gray-300 dark:border-white/20 rounded-xl overflow-hidden hover:bg-gray-50 dark:hover:bg-white/20 transition-all duration-300 transform hover:scale-105 group shadow-lg hover:shadow-xl"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="h-2 bg-gradient-to-r from-blue-600 to-cyan-600"></div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-white/60 mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <User size={14} />
                      {post.author}
                    </div>
                    <span>{post.readTime}</span>
                  </div>
                  
                  <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-600/30 text-blue-700 dark:text-blue-300 rounded-full text-sm border border-blue-200 dark:border-blue-500/50 mb-4">
                    {post.category}
                  </span>
                  
                  <h3 
                    className="text-xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors duration-300 cursor-pointer"
                    onClick={() => setSelectedPost(post)}
                  >
                    {post.title}
                  </h3>
                  
                  <p 
                    className="text-gray-700 dark:text-white/80 leading-relaxed cursor-pointer"
                    onClick={() => setSelectedPost(post)}
                  >
                    {post.excerpt}
                  </p>
                </div>
              </article>
            ))}
          </div>
        )}
        
        {filteredPosts.length === 0 && !selectedPost && (
          <div className="text-center text-gray-600 dark:text-white/60 py-12">
            Keine Artikel in dieser Kategorie gefunden.
          </div>
        )}
      </div>
    </section>
  );
};
