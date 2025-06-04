
import React, { useState } from 'react';
import { Calendar, User } from 'lucide-react';

export const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('Alle');
  
  const categories = ['Alle', 'Datenstrukturen', 'KI', 'Web Development', 'Python'];
  
  const blogPosts = [
    {
      title: "AVL-Bäume: Selbstbalancierende Binärbäume verstehen",
      excerpt: "AVL-Bäume sind eine faszinierende Datenstruktur, die automatisch für Balance sorgt. In diesem Artikel erkläre ich die Grundlagen, Rotationen und praktische Anwendungen.",
      content: `# AVL-Bäume: Selbstbalancierende Binärbäume verstehen

AVL-Bäume, benannt nach ihren Erfindern Adelson-Velsky und Landis, sind eine der elegantesten Datenstrukturen in der Informatik. Sie lösen ein fundamentales Problem binärer Suchbäume: die Degeneration zu linearen Listen.

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
  ];

  const filteredPosts = selectedCategory === 'Alle' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const [selectedPost, setSelectedPost] = useState(null);

  return (
    <section id="blog" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16 animate-fade-in">
          Blog
        </h2>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg'
                  : 'bg-white/10 backdrop-blur-md border border-white/20 text-white/80 hover:bg-white/20'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {selectedPost ? (
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-8 animate-fade-in">
            <button 
              onClick={() => setSelectedPost(null)}
              className="mb-6 text-blue-300 hover:text-white transition-colors duration-300"
            >
              ← Zurück zur Übersicht
            </button>
            <div className="prose prose-invert max-w-none">
              <div className="whitespace-pre-line text-white/90 leading-relaxed">
                {selectedPost.content}
              </div>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <article 
                key={post.title}
                className="animate-fade-in bg-white/10 backdrop-blur-md border border-white/20 rounded-xl overflow-hidden hover:bg-white/20 transition-all duration-300 transform hover:scale-105 cursor-pointer group"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedPost(post)}
              >
                <div className="h-2 bg-gradient-to-r from-blue-600 to-cyan-600"></div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4 text-sm text-white/60">
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
                  
                  <span className="inline-block px-3 py-1 bg-blue-600/30 text-blue-300 rounded-full text-sm border border-blue-500/50 mb-4">
                    {post.category}
                  </span>
                  
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors duration-300">
                    {post.title}
                  </h3>
                  
                  <p className="text-white/80 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
              </article>
            ))}
          </div>
        )}
        
        {filteredPosts.length === 0 && (
          <div className="text-center text-white/60 py-12">
            Keine Artikel in dieser Kategorie gefunden.
          </div>
        )}
      </div>
    </section>
  );
};
